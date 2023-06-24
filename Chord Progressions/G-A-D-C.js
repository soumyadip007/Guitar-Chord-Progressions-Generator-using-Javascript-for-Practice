const chords = ["D", "G", "A Major", "A Minor", "C",]

let i = 0;
while (i++ <= 50) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${i} -> ${chords[randomIndex]}`)
}

/*
1 -> A Minor
2 -> A Minor
3 -> D
4 -> A Minor
5 -> C
6 -> A Major
7 -> G
8 -> D
9 -> C
10 -> G
11 -> A Minor
12 -> G
13 -> D
14 -> A Minor
15 -> A Minor
16 -> A Minor
17 -> C
18 -> A Major
19 -> A Minor
20 -> C
21 -> A Minor
22 -> D
23 -> C
24 -> G
25 -> D
26 -> D
27 -> D
28 -> A Minor
29 -> G
30 -> A Major
31 -> A Minor
32 -> A Major
33 -> A Major
34 -> D
35 -> A Minor
36 -> A Minor
37 -> A Major
38 -> A Minor
39 -> A Minor
40 -> A Major
41 -> C
42 -> C
43 -> A Minor
44 -> A Major
45 -> A Minor
46 -> A Minor
47 -> C
48 -> A Major
49 -> C
50 -> A Minor
51 -> D
*/