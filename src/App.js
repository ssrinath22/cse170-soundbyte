import React, {useState} from 'react';
import Menu from './components/Menu'; 
import Tag from './components/Tag';
import Post from './components/Post';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const postsData = [
    {
        title: "Favorite Streaming Service",
        description: "Discuss your favorite streaming service here",
        imageUrl: "https://m.media-amazon.com/images/I/31B2Nyzd8XL.png",
        likeCount: 24
    },
    {
        title: "Expand Your Horizons",
        description: "Compre the different features of each streaming service",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/pdahTKshnEQYd2UjVpfyCH.jpg",
        likeCount: 100
    },
    {
        title: "Spend Your Money Wisely",
        description: "Are you overpaying for your music? Learn about the different pricing plans of each streaming service and the values they provide",
        imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_640.jpg",
        likeCount: 43
    },
    {
        title: "Discover Live Music",
        description: "Most music streaming apps offer live music services. Learn more about yours and how to make the most of it to see your favorite artsits live!",
        imageUrl: "https://media.pitchfork.com/photos/5b4284b9f96f675aaf0b7488/master/pass/Drake.jpg",
        likeCount: 16
    }
];


const App = () => {
    const tagsData = [
        { label: "Spotify", currColor: "#1ED760" },
        { label: "Apple Music", currColor: "#f94c57" },
        { label: "Tidal", currColor: "#0ec2c2" },
        { label: "Pandora", currColor: "#e0c0e1" },
        { label: "Comparisons", currColor: "#676464" },
        { label: "Features", currColor: "#676464" },
        { label: "Bugs", currColor: "#676464" },
        { label: "Discussion", currColor: "#676464" }
    ];

    const dummyClick = () => { 
        alert("This button does nothing right now : just here for demo purposes");
        // window.open("https://wikipedia.com/", "_blank");
    };

    const [posts, setPosts] = useState(postsData);

    const loadMore = () => {
        alert("This button doesn't really load more posts, it just repeats the same ones : just here for demo purposes.");
        setPosts(prevPosts => [...prevPosts, ...prevPosts]);
    };


    return (
        <div>
            <Menu />

            <div class = "main">
                <div class = "header">
                    <a href="/index.html">
                        <img className="logo-pic"
                            src="/music.png"
                            alt="logo"
                        ></img>
                        
                    </a>
                <h1 className="text-1">Discover Your Streaming Service</h1>
                </div>

                {/* The tags to filter out the posts/dynamically generate them */}
                <div class = "tags">
                    {tagsData.map((tag, index) => (
                    <Tag key={index} label={tag.label} currColor={tag.currColor} /> /* Generate tags dynamically (implement querying to get custom number of tags) */
                    ))}
                </div>

                {/* The posts to display */}
                <div class = "posts">
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            title={post.title}
                            description={post.description}
                            imageUrl={post.imageUrl}
                            likeCount={post.likeCount}
                        />
                    ))}
                </div>

                <div className="load">
                        <button className="load-button" onClick={loadMore}>Load More</button>
                </div>
                

                
                
            </div>

        </div>

    );
};

export default App;