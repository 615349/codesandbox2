const calculateDepth = (array, depth) => {
  for (const element of array) {
    element.depth = depth;
    if (element.children.length > 0) {
      calculateDepth(element.children, depth + 1);
    }
  }
};

const arr = [
  { 
    id: 0, 
    children: []
  },
  {
    id: 1,
    children: [
      { 
        id: 2, 
        children: []
      },
      {
        id: 3, 
        children: [
          { 
            id: 4, 
            children: [] 
          }
        ]
      }
    ]
  },
  {
    id: 5,
    children: []
  }
];

calculateDepth(arr, 0);
arr is [
  {
    "id": 0,
    "children": [],
    "depth": 0
  },
  {
    "id": 1,
    "children": [
      {
        "id": 2,
        "children": [],
        "depth": 1
      },
      {
        "id": 3,
        "children": [
          {
            "id": 4,
            "children": [],
            "depth": 2
          }
        ],
        "depth": 1
      }
    ],
    "depth": 0
  },
  {
    "id": 5,
    "children": [],
    "depth": 0
  }
]
