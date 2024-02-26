// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from '../pages/HomePage'
// import LoginPage from '../pages/LoginPage'
// import RegisterPage from '../pages/RegisterPage'
// import AccountPage from '../pages/AccountPage'
// import ProjectsPage from '../pages/ProjectsPage'
// import ProjectPage from '../pages/ProjectPage'
// import UsersPage from '../pages/admin/UsersPage'
// import NotFoundPage from '../pages/NotFoundPage'
// import Layout from '../components/layouts/Layout'
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'

// export default function AppRouter() {
//     return (
//         <Router>
//             <Layout>
//                 <Routes>

//                     <Route exact path="/" element={<HomePage />} />

//                     <Route exact path="/" element={<PublicRoute />}>
//                         <Route exact path="/login" element={<LoginPage />} />
//                         <Route exact path="/register" element={<RegisterPage />} />
//                     </Route>

//                     <Route exact path="/" element={<PrivateRoute />}>
//                         <Route exact path="/account" element={<AccountPage />} />
//                         <Route exact path="/projects" element={<ProjectsPage />} />
//                         <Route exact path="/project/:projectId" element={<ProjectPage />} />
//                         <Route hasRole='admin' exact path="/admin/users" element={<UsersPage />} />
//                     </Route>

//                     <Route path="*" element={<NotFoundPage />} />
//                 </Routes>
//             </Layout>

//         </Router >
//     )
// }
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from '../pages/HomePage'
// import LoginPage from '../pages/LoginPage'
// import RegisterPage from '../pages/RegisterPage'
// import AccountPage from '../pages/AccountPage'
// import ProjectsPage from '../pages/ProjectsPage'
// import ProjectPage from '../pages/ProjectPage'
// import UsersPage from '../pages/admin/UsersPage'
// import NotFoundPage from '../pages/NotFoundPage'
// import Layout from '../components/layouts/Layout'
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'

// export default function AppRouter() {
//     return (
//         <Router>
//             <Layout>
//                 <Routes>
//                     <Route exact path="/" element={<HomePage />} />
//                     <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
//                     <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
//                     <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
//                     <Route path="/projects" element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
//                     <Route path="/project/:projectId" element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
//                     <Route path="/admin/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} />
//                     <Route path="*" element={<NotFoundPage />} />
//                 </Routes>
//             </Layout>
//         </Router>
//     )
// }
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layouts/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
                    <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                    <Route path="/projects" element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
                    <Route path="/project/:projectId" element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
                    <Route path="/admin/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
