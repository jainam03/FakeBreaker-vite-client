// src/components/ResultsPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paper, Typography, Button, Box } from "@mui/material";

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, fileName } = location.state || {};

    // If no result data exists, redirect back to upload page
    if (!result) {
        navigate("/");
        return null;
    }

    return (
        <Box sx={{ maxWidth: 700, margin: "auto", mt: 10 }}>
            <Paper elevation={3} sx={{ padding: 5 }}>
                <Typography variant="h3" gutterBottom={true}>
                    Analysis Results
                </Typography>
                <Box mt={2}>
                    <Typography variant="h6" color="textSecondary">File name: {fileName}</Typography>
                    <Typography variant="h5">Results: {result.result_label}</Typography>
                    <Typography variant="h5">
                        Fake Probability: {result.fake_probability.toFixed(2)}%
                    </Typography>
                    <Typography variant="h5">
                        Real Probability: {result.real_probability.toFixed(2)}%
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                    onClick={() => navigate("/")}
                >
                    Back to Upload
                </Button>
            </Paper>
            <Paper elevation={15} sx={{ padding: 2, mt: 3, backgroundColor: "#f9f9f9" }}>
                <Typography variant="h5" color="red">
                    Disclaimer: The results generated by the detector may not always be accurate, but can be considered as a strong indication!
                </Typography>
            </Paper>
        </Box>
    );
};

export default ResultsPage;
