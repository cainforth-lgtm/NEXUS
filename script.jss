// =====================================
// NEXUS SUPABASE
// =====================================

const SUPABASE_URL = "https://zgeswrhyhxgwcgcgnsti.supabase.co";
const SUPABASE_KEY = "sb_publishable_GX9S4EVFF4Lf_BRMETV80g_oEavE6Up";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// =====================================
// LOGIN PANEL
// =====================================

function openLogin() {

    document
        .getElementById("loginPanel")
        .classList.add("active");

    showLogin();
}


function closeLogin() {

    document
        .getElementById("loginPanel")
        .classList.remove("active");
}


// =====================================
// SWITCH LOGIN / SIGNUP
// =====================================

function showLogin() {

    document.getElementById("loginForm").style.display = "block";

    document.getElementById("signupForm").style.display = "none";
}


function showSignup() {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("signupForm").style.display = "block";
}


// =====================================
// LOGIN
// =====================================

async function handleLogin() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        alert("Please enter your email and password.");

        return;
    }


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({

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


// =====================================
// SIGN UP
// =====================================

async function handleSignup() {

    const username =
        document.getElementById("signupUsername").value.trim();

    const displayName =
        document.getElementById("signupDisplayName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("signupConfirmPassword").value;


    if (!username || !displayName || !email || !password) {

        alert("Please fill in all fields.");

        return;
    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    if (password.length < 8) {

        alert("Password must be at least 8 characters.");

        return;
    }


    const { data, error } =
        await supabaseClient.auth.signUp({

            email: email,

            password: password,

            options: {

                data: {

                    username: username,

                    display_name: displayName

                }

            }

        });


    if (error) {

        alert(error.message);

        return;
    }


    alert(
        "Account created successfully! " +
        "Check your email if confirmation is required."
    );


    showLogin();
}


// =====================================
// LOGOUT
// =====================================

async function logout() {

    const { error } =
        await supabaseClient.auth.signOut();


    if (error) {

        alert(error.message);

        return;
    }


    window.location.href = "index.html";
}


// =====================================
// EXPLORE
// =====================================

function explore() {

    window.scrollTo({

        top: document.body.scrollHeight,

        behavior: "smooth"

    });

}
