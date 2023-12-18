import React, { useContext } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import UserContext from '../../context/UserContext';
import { motion } from 'framer-motion';


function Post(props) {
    const post = props.post;
    const context = useContext(UserContext);
    const { mode } = context;
    // to show stored image in api folder
    // make Public folder
    const PF = "http://localhost:5000/images/";
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`post theme-${mode}`}
        >
            <CardActionArea>
                {/* if no post photo then default */}
                <Link className='link' to={`/post/${post._id}`}>
                    <img src={post.photo ? PF + post.photo : "https://c4.wallpaperflare.com/wallpaper/405/400/980/winter-snow-sun-light-forest-trees-sunset-wallpaper-preview.jpg"} alt="postImg" className="postImg" />
                    <div className="postInfo">
                        <div className="postCats">
                            <span className='postCat'>Music</span>
                            <span className='postCat'>Life</span>
                        </div>
                        <span className="postTitle">{post.title}</span>
                        <hr />
                        <span className="postDate">{new Date(post.createdAt).toDateString()
                        }</span>
                        <p className="postDesc">
                            {post.desc}
                        </p>
                    </div>
                </Link>
            </CardActionArea>
        </motion.div>
    )
}

export default Post;
