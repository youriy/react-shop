import {Provider} from 'react-redux';
import {Layout} from './components/Layout.jsx';
import {store} from './store/store.js';

const App = () => (
    <Provider store={store}>
        <Layout/>
    </Provider>
);

export {App};
