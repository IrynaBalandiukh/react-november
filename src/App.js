import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {
    CommentsPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
  return (
    <Routes>
       <Route path={'/'} element={<MainLayout/>}>
           <Route index element={<Navigate to={'home'}/>}/>
           <Route path={'home'} element={<HomePage/>}/>
           <Route path={'login'} element={<LoginPage/>}/>
           <Route path={'users'} element={<RequireAuth><UsersPage/></RequireAuth>}>
               <Route path={':userId'} element={<UserDetailsPage/>}>
                   <Route path={'posts'} element={<PostsPage/>}/>
               </Route>
           </Route>
           <Route path={'posts'} element={<RequireAuth><PostsPage/></RequireAuth>}>
               <Route path={':postId'} element={<PostDetailsPage/>}>
                   <Route path={'comments'} element={<CommentsPage/>}/>
               </Route>
           </Route>
           <Route path={'*'} element={<NotFoundPage/>}/>
       </Route>
    </Routes>
  );
}

export default App;
