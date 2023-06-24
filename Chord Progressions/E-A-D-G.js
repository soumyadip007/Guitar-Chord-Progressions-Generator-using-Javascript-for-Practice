const chords = ["E", "G", "A Major", "A Minor", "D",]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${i} -> ${chords[randomIndex]}`)
}

/*
1 -> D
2 -> E
3 -> A Major
4 -> G
5 -> A Minor
6 -> E
7 -> G
8 -> G
9 -> G
10 -> E
11 -> A Major
12 -> D
13 -> A Minor
14 -> A Minor
15 -> A Minor
16 -> A Minor
17 -> G
18 -> A Minor
19 -> E
20 -> A Major
21 -> D
22 -> A Major
23 -> D
24 -> E
25 -> D
26 -> A Major
27 -> E
28 -> E
29 -> A Minor
30 -> A Minor
31 -> D
32 -> G
33 -> D
34 -> E
35 -> G
36 -> A Major
37 -> A Minor
38 -> A Major
39 -> G
40 -> A Minor
41 -> G
42 -> E
43 -> A Major
44 -> A Minor
45 -> D
46 -> E
47 -> E
48 -> E
49 -> A Major
50 -> A Minor
51 -> G
*/