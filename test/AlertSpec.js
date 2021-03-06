import React from 'react';
import { mount } from 'enzyme';

import Alert from '../src/Alert';

describe('<Alert>', () => {
  it('Should output a alert with message', () => {
    mount(
      <Alert>
        <strong>Message</strong>
      </Alert>,
    ).assertSingle('.alert > strong');
  });

  it('Should have dismissible style', () => {
    mount(<Alert dismissible>Message</Alert>).assertSingle(
      '.alert-dismissible',
    );
  });

  it('Should call onClose callback on dismiss click', done => {
    let doneOp = () => {
      done();
    };
    mount(
      <Alert dismissible onClose={doneOp}>
        Message
      </Alert>,
    )
      .find('CloseButton')
      .simulate('click');
  });

  it('Should have use variant class', () => {
    mount(<Alert variant="danger">Message</Alert>).assertSingle(
      '.alert-danger',
    );
  });

  describe('Web Accessibility', () => {
    it('Should have alert role', () => {
      mount(<Alert>Message</Alert>).assertSingle('[role="alert"]');
    });
  });

  describe('Alert alert-heading', () => {
    it('Should have alert-heading', () => {
      mount(
        <Alert>
          <Alert.Heading>Well done</Alert.Heading>
          Message
        </Alert>,
      ).assertSingle('.alert-heading');
    });

    it('Should have div styled as an h4 by default', () => {
      mount(
        <Alert>
          <Alert.Heading>Well done</Alert.Heading>
          Message
        </Alert>,
      ).assertSingle('.h4');
    });

    it('Should support Heading as as prop', () => {
      mount(
        <Alert>
          <Alert.Heading as="h1">Well done</Alert.Heading>
          Message
        </Alert>,
      ).assertSingle('h1');
    });
  });
});
