/**
 * @author Hector J. Vasquez <ipi.vasquez@gmail.com>
 *
 * @licence
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Edge} from './Edge';

/**
 * Represents a vertex of a graph. It must provide an id and a neighborhood, that is, a list of adjacent vertexes.
 * Vertexes may be built manually or with the Graph class for its internal handling.
 */
export class Vertex {
    /**
     * This id must be handled internally by the Graph which this vertex belongs to.
     */
    public id: number;
    /**
     * Extra information needed for this vertex such as coordinates, status, etc. shall be included in here.
     * The intention for info is to be used as for example, the weight function of an edge or a heuristic in the graph.
     * e.g. Having this.info allows to calculate that heuristic as the euclidean distance if it has the coordinates for
     * this vertex.
     */
    public info: any;
    private _edges: Edge[];
    private _name: string;

    /**
     * Builds a vertex with an optional name and optional extra information for it.
     * @param id The id of this vertex on graph.
     * @param name The name this is going to get when printing.
     * @param info
     */
    constructor(id: number, name?: string, info?: any) {
        this.id = id;
        this._name = name;
        this.info = info;
        this._edges = [];
    }

    /**
     * Adds an edge to this vertex neighborhood.
     * @param e The new edge from this.
     */
    public addEdge(e: Edge): void {
        for (let i = 0; i < this._edges.length; i++)
            if (this.edges[i].source.equals(e.source) && this.edges[i].destination === e.destination) {
                if (this.edges[i].weight && e.weight && this.edges[i].weight > e.weight)
                    this.edges[i] = e;
                return;
            }
        this.edges.push(e);
    }

    /**
     * Return the list of edges adjacent to this.
     */
    get edges(): Edge[] {
        return this._edges;
    }

    /**
     * The name for this vertex, if there is.
     * @return {string}
     */
    get name(): string {
        if (this._name)
            return this._name;
        return this.id + '';
    }

    /**
     * Sets a name for this graph.
     * @param value The new name for this.
     */
    set name(value: string) {
        this._name = value;
    }

    /**
     * Returns the neighborhood of this vertex, that is, the vertexes connected to this with an edge.
     */
    public getNeighborHood(): Vertex[] {
        return this.edges.map((e) => e.destination);
    }

    /**
     * Checks if another vertex is equivalent to this.
     * @param v The other vertex.
     * @return {boolean} this === v
     */
    public equals(v: Vertex): boolean {
        return v._edges === this._edges && this._name === v._name;
    }

    /**
     * Prints the name of this.
     * @return {string} The name of this.
     */
    public toString(): string {
        return this.name + (this.edges.length ? ': ' : '') + this.edges.join(', ');
    }
}