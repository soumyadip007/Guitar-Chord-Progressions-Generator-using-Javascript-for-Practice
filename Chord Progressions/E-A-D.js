const chords = ["E", "A Major", "A Minor", "D"]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${i} -> ${chords[randomIndex]}`)
}

/*
1 -> E
2 -> E
3 -> A Minor
4 -> E
5 -> A Minor
6 -> D
7 -> D
8 -> A Major
9 -> A Minor
10 -> E
11 -> A Minor
12 -> A Minor
13 -> A Major
14 -> E
15 -> E
16 -> A Minor
17 -> E
18 -> A Major
19 -> A Minor
20 -> A Minor
21 -> A Minor
22 -> A Major
23 -> A Minor
24 -> E
25 -> D
26 -> A Minor
27 -> D
28 -> A Minor
29 -> D
30 -> E
31 -> D
32 -> D
33 -> D
34 -> A Minor
35 -> A Minor
36 -> A Major
37 -> A Major
38 -> A Minor
39 -> E
40 -> A Minor
41 -> A Major
42 -> D
43 -> D
44 -> D
45 -> D
46 -> A Minor
47 -> E
48 -> E
49 -> A Major
50 -> A Major
51 -> A Minor
*/