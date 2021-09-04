class Vertex {
  name: string;
  edges: string[];

  constructor(vName: string) {
    this.name = vName;
    this.edges = [];
  }
}

class Graph {
  adjList: Vertex[];
  constructor() {
    this.adjList = [];
  }

  addVertex(newVertex: Vertex): boolean {
    // If the vertex already exist, do nothing
    if (this.adjList.find((e) => e.name === newVertex.name)) {
      return true;
    }
    this.adjList.push(newVertex);
    return true;
  }

  addAnEdge(vertex1: string, vertex2: string): boolean {
    this.adjList.find((e) => e.name == vertex1).edges.push(vertex2);

    this.adjList.find((e) => e.name == vertex2).edges.push(vertex1);
    return true;
  }

  removeAnEdge(vertex1: string, vertex2: string): boolean {
    this.adjList.find((e) => e.name === vertex1).edges = this.adjList
      .find((e) => e.name === vertex1)
      .edges.filter((v) => v !== vertex2);

    this.adjList.find((e) => e.name === vertex2).edges = this.adjList
      .find((e) => e.name === vertex2)
      .edges.filter((v) => v !== vertex1);

    return true;
  }

  dfsTraversalRecursive(startVertexName: string): string[] {
    let result: string[] = [];
    let visited: any = {}; //
    let startVertex = this.adjList.find((v) => v.name === startVertexName);

    // We are saving into a variable due to the fact that the scope of "this" keyword will change in the dfs inner function.
    // We will not be able to access this.adjList within the dfs inner function
    let adjList = this.adjList;

    (function dfs(vertex: Vertex): void {
      // Return if vertex has no edges - This is our base case
      if (vertex === null || vertex === undefined) return null;

      // Add vertex to result list
      result.push(vertex.name);

      // Add vertex to visited list
      visited[vertex.name] = true;

      // For each edge of the vertex, traverse through the neighbors
      adjList
        .find((v) => v.name === vertex.name)
        .edges.forEach((neighbor) => {
          // If not visited, recurse of the neighbor edges
          if (visited[neighbor] !== true) {
            dfs(adjList.find((e) => e.name === neighbor));
          }
        });
    })(startVertex);

    // Return all the vertices
    return result;
  }

  dfsTraversalIterative(startVertexName: string): string[] {
    let result: string[] = [];
    let visited: any = {};
    let stack: string[] = [];
    stack.push(startVertexName);

    while (stack.length > 0) {
      let name = stack.pop();
      let currentVertex = this.adjList.find((e) => e.name === name);
      if (!visited[currentVertex.name]) {
        // Mark the current vertex as visited
        visited[currentVertex.name] = true;

        // Add the current vertex to result list
        result.push(currentVertex.name);

        // Visit the neighbors of the current vertex one by on, if they are not already visited
        currentVertex.edges.forEach((neighbor) => {
          if (!visited[neighbor]) stack.push(neighbor);
        });
      }
    }

    return result;
  }

  bfsTraversalIterative(startVertexName: string): string[] {
    let result: string[] = [];
    let visited: any = {};
    let queue: string[] = [];
    queue.push(startVertexName);

    while (queue.length > 0) {
      let name = queue.shift();
      let currentVertex = this.adjList.find((e) => e.name === name);
      if (!visited[currentVertex.name]) {
        // Mark the current vertex as visited
        visited[currentVertex.name] = true;

        // Add the current vertex to result list
        result.push(currentVertex.name);

        // Visit the neighbors of the current vertex one by on, if they are not already visited
        currentVertex.edges.forEach((neighbor) => {
          if (!visited[neighbor]) queue.push(neighbor);
        });
      }
    }
    return result;
  }
}
