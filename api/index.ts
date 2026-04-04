import app from "../server.ts";

// This is the entry point for Vercel serverless functions
// It exports the Express app which Vercel will use to handle requests
console.log("Vercel API function initialized");

export default (req: any, res: any) => {
  try {
    return app(req, res);
  } catch (error: any) {
    console.error("Vercel API error:", error);
    res.status(500).json({ 
      error: "Internal Server Error", 
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
};
