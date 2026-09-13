// ===============================
// NEXUS — SUPABASE CONNECTION
// ===============================

const SUPABASE_URL = "https://zgeswrhyhxgwcgcgnsti.supabase.co";
const SUPABASE_KEY = "sb_publishable_GX9S4EVFF4Lf_BRMETV80g_oEavE6Up";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ===============================
// LOGIN PANEL
// ===============================

function openLogin() {
    document
        .getElementById("loginPanel")
        .classList.add("active");
}


function closeLogin() {
    document
        .getElementById("loginPanel")
        .classList.remove("active");
}


function explore() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}


// ===============================
// SIGN UP
// ===============================

async function signUp(email, password) {

    const { data, error } =
        await supabase.auth.signUp({
            email: email,
            password: password
        });

    if (error) {
        alert(error.message);
        return;
    }

    alert(
        "Account created! Check your email if confirmation is required."
    );

    console.log(data);
}


// ===============================
// LOGIN
// ===============================

async function login(email, password) {

    const { data, error } =
        await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

    if (error) {
        alert(error.message);
        return;
    }

    console.log("Logged in:", data.user);

    window.location.href = "dashboard.html";
}


// ===============================
// LOGOUT
// ===============================

async function logout() {

    const { error } =
        await supabase.auth.signOut();

    if (error) {
        alert(error.message);
        return;
    }

    window.location.href = "index.html";
}
