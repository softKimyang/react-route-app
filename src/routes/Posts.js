import React from 'react';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
// react-router-dom V6에서는 useParams사용. 이전버전 match 
const Post = () => {
    let params = useParams();
    return (
            <div style={{ padding: "2rem" }}> {params.title} post</div>

    );
};

const Posts = () => {
    return (
        <div>
            <h1>포스트</h1>
        <div style={{ display: "flex" , color: "20px"}}>
            <nav
                    style={{
                        width: "100px",
                        borderRight: "solid 1px",
                        padding: "1rem",
                      }}
            >
                <NavLink to="/posts/react">리액트</NavLink> <br />
                <NavLink to="/posts/redux">리덕스</NavLink> <br />
                <NavLink to="/posts/router">라우터</NavLink>
            </nav>
            <main>
                <Routes>
                    <Route path=":title" element={<Post />}></Route>
                </Routes>
            </main>
         </div>
        </div>
    );
};

export default Posts;