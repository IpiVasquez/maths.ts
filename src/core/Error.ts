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

/**
 * Exception thrown when the user sends a wrong input.
 */
export class InputError extends Error {
    constructor(message: string = 'There is something wrong with the input.') {
        super(message);
    }
}

/**
 * Exception thrown when an object with the same key in certain scope is created at the same scope.
 */
export class DuplicatedKeyError extends Error {
    constructor(m: string = 'You are trying to add an already existing key.') {
        super(m);
    }
}