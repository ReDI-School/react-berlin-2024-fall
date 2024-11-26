import { useState } from "react";

const Lesson19Vercel = () => {
    const [showInstructions, setShowInstructions] = useState(false);

    return (
        <div>
            
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
                <button onClick={() => setShowInstructions(!showInstructions)}>
                    {showInstructions ? "Hide Extras" : "Show Extras"}
                </button>
                    {showInstructions && (<>
                        <h2>Automatic Deployments with Vercel</h2>
                        <p>
                            One of the powerful features of Vercel is its ability to automatically deploy your application whenever you push changes to your Git repository. This ensures that your live application is always up-to-date with the latest code changes.
                        </p>
                        <ol>
                            <li>
                                <strong>Step 1:</strong> Make sure your Git repository is connected to your Vercel project.
                            </li>
                            <li>
                                <strong>Step 2:</strong> Push your changes to the main branch (or the branch you have configured for deployment).
                            </li>
                            <li>
                                <strong>Step 3:</strong> Vercel will automatically detect the new commit and start a new deployment.
                            </li>
                            <li>
                                <strong>Step 4:</strong> You can monitor the deployment process in the Vercel dashboard.
                            </li>
                            <li>
                                <strong>Step 5:</strong> Once the deployment is complete, your changes will be live on your Vercel URL.
                            </li>
                        </ol>
                    </>
                )}
            </div>
        </div>
    );
};

export default Lesson19Vercel;