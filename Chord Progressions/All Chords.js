const chords = ["D", "G", "A Major", "A Minor", "C", "E"]

let i = 0;
while (i++ <= 100) {
    const randomIndex = Math.floor(Math.random() * chords.length);
    console.log(`${i} -> ${chords[randomIndex]}`)
}

/*
1 -> G
2 -> D
3 -> G
4 -> A Minor
5 -> D
6 -> C
7 -> D
8 -> E
9 -> E
10 -> E
11 -> G
12 -> D
13 -> G
14 -> D
15 -> A Major
16 -> E
17 -> D
18 -> G
19 -> D
20 -> G
21 -> D
22 -> E
23 -> G
24 -> G
25 -> A Major
26 -> E
27 -> D
28 -> C
29 -> C
30 -> C
31 -> A Major
32 -> C
33 -> D
34 -> E
35 -> E
36 -> A Minor
37 -> D
38 -> G
39 -> A Minor
40 -> D
41 -> A Major
42 -> A Major
43 -> A Major
44 -> A Major
45 -> A Minor
46 -> G
47 -> A Minor
48 -> A Minor
49 -> D
50 -> D
51 -> C
52 -> C
53 -> G
54 -> C
55 -> E
56 -> C
57 -> C
58 -> E
59 -> C
60 -> A Minor
61 -> E
62 -> G
63 -> A Minor
64 -> E
65 -> A Major
66 -> A Minor
67 -> C
68 -> C
69 -> D
70 -> E
71 -> C
72 -> E
73 -> D
74 -> E
75 -> A Major
76 -> A Major
77 -> A Minor
78 -> G
79 -> C
80 -> D
81 -> E
82 -> A Minor
83 -> G
84 -> A Minor
85 -> G
86 -> E
87 -> D
88 -> E
89 -> G
90 -> A Major
91 -> D
92 -> D
93 -> E
94 -> G
95 -> D
96 -> D
97 -> E
98 -> A Minor
99 -> A Major
100 -> A Minor
101 -> A Major
*/