import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import { proptypes } from 'stores';

@observer
@inject(stores => ({
  todos: stores.TodoStore.todos,
  remaining: stores.TodoStore.remaining,
}))
class Home extends Component {
  render() {
    const { todos, remaining, t } = this.props;
    return (
      <div>
        <p>{t('Home')}</p>
        <p>{todos[0].title}</p>
        <p>
          Remaining:
          {remaining.length}
        </p>
      </div>
    );
  }
}

Home.propTypes = proptypes.todoStoreProps;
Home.defaultProps = proptypes.todoStoreDefaultProps;

export default withTranslation()(Home);
