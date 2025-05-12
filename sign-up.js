const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const submitForm = async (email, password) => {
    if (!validateEmail(email)) {
        throw new Error("Invalid email format");
    }
    // Simulate API call
    const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error("Signup failed");
    }
    return response.json();
};
module.exports = { validateEmail, submitForm };