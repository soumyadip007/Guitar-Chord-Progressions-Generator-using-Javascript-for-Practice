const chords = ["D", "G", "A Major", "A Minor", "C",]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${chords[randomIndex]} ->`)
}

/*
A Minor ->
D ->
A Minor ->
G ->
A Minor ->
C ->
A Major ->
G ->
C ->
C ->
C ->
A Major ->
C ->
G ->
A Major ->
G ->
D ->
C ->
D ->
G ->
C ->
A Minor ->
D ->
A Minor ->
G ->
A Major ->
A Minor ->
C ->
A Major ->
G ->
D ->
A Minor ->
A Major ->
A Minor ->
D ->
A Major ->
A Major ->
A Major ->
C ->
G ->
A Minor ->
D ->
D ->
C ->
C ->
A Minor ->
A Major ->
D ->
C ->
A Minor ->
G ->
*/