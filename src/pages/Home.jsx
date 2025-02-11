import koupen from '../assets/koupen.jpeg';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <h1>Welcome to Our Website</h1>
                <p>This is a basic website layout with a top navigation bar and sidebar.</p>
                <h2>Main Content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</p>
                <img src={koupen} alt="koupen the penguin dancing to music" width="500" height="600"/>
        </>
    );
}