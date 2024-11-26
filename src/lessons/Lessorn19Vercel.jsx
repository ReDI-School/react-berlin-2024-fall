
const Lesson19Vercel = () => {
    return (
        <div className="vercelInstructions">
            <h1>Deploying a React App to Vercel from Git</h1>
            <ol>
                <li>
                    <strong>Step 1:</strong> Push your React app to a Git repository (in our case, on GitHub).
                </li>
                <li>
                    <strong>Step 2:</strong> Go to <a href="https://vercel.com">Vercel</a> and sign up for an account if you don&apos;t have one.
                </li>
                <li>
                    <strong>Step 3:</strong> After logging in, click on the &quot;New Project&quot; button.
                </li>
                <li>
                    <strong>Step 4:</strong> Import your Git repository by selecting the appropriate Git provider and repository.
                </li>
                <li>
                    <strong>Step 5:</strong> Configure the project settings if needed (e.g., build command, output directory).
                </li>
                <li>
                    <strong>Step 6:</strong> Click on the &quot;Deploy&quot; button to start the deployment process.
                </li>
                <li>
                    <strong>Step 7:</strong> Wait for the deployment to complete. Once done, you will get a live URL for your React app.
                </li>
            </ol>
            <p>
                For more detailed instructions, you can refer to the official Vercel documentation: <a href="https://vercel.com/docs">Vercel Docs</a>.
            </p>
        </div>
    );
};

export default Lesson19Vercel;