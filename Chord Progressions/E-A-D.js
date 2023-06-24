const chords = ["E", "A Major", "A Minor", "D"]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${chords[randomIndex]} ->`)
}

/*
A Minor ->
A Major ->
E ->
D ->
E ->
D ->
A Major ->
A Major ->
D ->
D ->
A Minor ->
D ->
D ->
A Major ->
A Major ->
D ->
D ->
D ->
E ->
A Major ->
A Minor ->
A Minor ->
E ->
D ->
A Minor ->
E ->
A Major ->
A Major ->
A Minor ->
A Minor ->
D ->
A Minor ->
D ->
A Major ->
A Major ->
D ->
A Major ->
A Minor ->
D ->
A Major ->
E ->
D ->
A Major ->
D ->
A Major ->
E ->
D ->
A Minor ->
A Major ->
E ->
D ->
*/