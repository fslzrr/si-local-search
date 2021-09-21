type GraphNode = {
  id: string;
  siblings?: GraphNode[];
};

const graph: GraphNode = {
  id: "A8-B7",
  siblings: [
    {
      id: "A7-B6",
      siblings: [
        {
          id: "B5",
          siblings: [{ id: "A5" }],
        },
        {
          id: "C6",
          siblings: [
            { id: "D6-E6" },
            {
              id: "C5",
              siblings: [
                { id: "D5" },
                {
                  id: "C4",
                  siblings: [
                    { id: "D4" },
                    {
                      id: "B4",
                      siblings: [
                        {
                          id: "B3",
                          siblings: [
                            {
                              id: "A3",
                              siblings: [{ id: "A2-B1" }, { id: "A4" }],
                            },
                            {
                              id: "B2",
                              siblings: [
                                {
                                  id: "C2-F3",
                                  siblings: [
                                    {
                                      id: "G3",
                                      siblings: [
                                        {
                                          id: "H3",
                                          siblings: [
                                            {
                                              id: "H2",
                                              siblings: [
                                                { id: "H1" },
                                                {
                                                  id: "G2-E1",
                                                  siblings: [
                                                    { id: "D1-C1" },
                                                    { id: "F1-G1" },
                                                  ],
                                                },
                                              ],
                                            },
                                            { id: "I3-I1" },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      id: "F4-J4",
                                      siblings: [
                                        {
                                          id: "K4",
                                          siblings: [
                                            { id: "K5" },
                                            { id: "E4" },
                                            {
                                              id: "K3",
                                              siblings: [
                                                { id: "K2" },
                                                { id: "L3-L2" },
                                                { id: "J3-L1" },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          id: "J5-J6",
                                          siblings: [
                                            { id: "K6" },
                                            {
                                              id: "J7",
                                              siblings: [
                                                { id: "K7-L5" },
                                                {
                                                  id: "I7",
                                                  siblings: [
                                                    {
                                                      id: "I6",
                                                      siblings: [
                                                        {
                                                          id: "H6",
                                                          siblings: [
                                                            {
                                                              id: "G6-F5",
                                                              siblings: [
                                                                { id: "E5-E4" },
                                                                { id: "F6" },
                                                              ],
                                                            },
                                                            {
                                                              id: "H7-G7",
                                                              siblings: [
                                                                { id: "F7-E7" },
                                                                { id: "G8" },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      id: "I8",
                                                      siblings: [
                                                        { id: "H8" },
                                                        {
                                                          id: "J8",
                                                          siblings: [
                                                            { id: "J9" },
                                                            { id: "K8-L8" },
                                                          ],
                                                        },
                                                        {
                                                          id: "I9-G9",
                                                          siblings: [
                                                            {
                                                              id: "F9-E10",
                                                              siblings: [
                                                                {
                                                                  id: "D10-B15",
                                                                },
                                                                {
                                                                  id: "F10-F11",
                                                                  siblings: [
                                                                    {
                                                                      id: "E11-D11",
                                                                      siblings:
                                                                        [
                                                                          {
                                                                            id: "C11-B12",
                                                                          },
                                                                          {
                                                                            id: "D12-C12",
                                                                          },
                                                                        ],
                                                                    },
                                                                    {
                                                                      id: "F12-E15",
                                                                      siblings:
                                                                        [
                                                                          {
                                                                            id: "F15-I15",
                                                                          },
                                                                          {
                                                                            id: "D15",
                                                                            siblings:
                                                                              [
                                                                                {
                                                                                  id: "D14",
                                                                                },
                                                                                {
                                                                                  id: "C15-C14",
                                                                                },
                                                                              ],
                                                                          },
                                                                        ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              id: "G10",
                                                              siblings: [
                                                                {
                                                                  id: "H10",
                                                                },
                                                                {
                                                                  id: "G11-H11",
                                                                  siblings: [
                                                                    {
                                                                      id: "I11",
                                                                    },
                                                                    {
                                                                      id: "H12",
                                                                      siblings:
                                                                        [
                                                                          {
                                                                            id: "I12",
                                                                          },
                                                                          {
                                                                            id: "G12-G13",
                                                                            siblings:
                                                                              [
                                                                                {
                                                                                  id: "F13-F14",
                                                                                },
                                                                                {
                                                                                  id: "G14",
                                                                                },
                                                                              ],
                                                                          },
                                                                          {
                                                                            id: "H13-I13",
                                                                            siblings:
                                                                              [
                                                                                {
                                                                                  id: "I14-H14",
                                                                                },
                                                                                {
                                                                                  id: "J13",
                                                                                  siblings:
                                                                                    [
                                                                                      {
                                                                                        id: "J12-K12",
                                                                                      },
                                                                                      {
                                                                                        id: "K13",
                                                                                        siblings:
                                                                                          [
                                                                                            {
                                                                                              id: "L13-L12",
                                                                                            },
                                                                                            {
                                                                                              id: "K14",
                                                                                              siblings:
                                                                                                [
                                                                                                  {
                                                                                                    id: "J14-K15",
                                                                                                  },
                                                                                                  {
                                                                                                    id: "L14-L15",
                                                                                                  },
                                                                                                ],
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    ],
                                                                                },
                                                                              ],
                                                                          },
                                                                        ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: "C3",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "B8",
      siblings: [{ id: "C8" }],
    },
  ],
};

function beam(
  node: GraphNode,
  k: number,
  goal: string,
  currentPath: string[] = []
): string[] {
  const nextPath = [...currentPath, node.id];

  if (node.id === goal) {
    return nextPath;
  }

  return [];
}

console.log(JSON.stringify(beam(graph, 2, "K8-L8")));
