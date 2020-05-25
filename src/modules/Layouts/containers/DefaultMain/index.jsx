// Libraries
import React, {Component, Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Layout} from 'antd';

// Assets
import routes from 'Src/routes';

// Components
import DefaultHeader from 'Layouts/containers/DefaultHeader';

const {Content} = Layout;

class DefaultMain extends Component {
    render() {
        return (
            <Layout className='layout'>
                <DefaultHeader />
                <Content>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                        <route.component {...props} />
                                    )} />) : null;
                            }
                            )}
                            <Redirect to={'/home'} />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        );
    }
}

export default withRouter(DefaultMain);