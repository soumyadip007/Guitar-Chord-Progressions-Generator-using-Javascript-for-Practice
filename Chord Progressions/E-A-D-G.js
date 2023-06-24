const chords = ["E", "G", "A Major", "A Minor", "D",]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${chords[randomIndex]} ->`)
}

/*
D ->
A Minor ->
A Minor ->
A Major ->
G ->
A Major ->
A Major ->
G ->
E ->
E ->
G ->
D ->
G ->
D ->
A Major ->
A Minor ->
E ->
G ->
A Major ->
G ->
E ->
A Minor ->
D ->
A Minor ->
E ->
D ->
D ->
D ->
D ->
A Major ->
G ->
A Major ->
E ->
G ->
A Minor ->
E ->
A Major ->
A Minor ->
A Minor ->
D ->
E ->
D ->
A Minor ->
A Major ->
G ->
A Major ->
A Major ->
E ->
G ->
E ->
A Major ->
*/