export namespace Folding {

    /**
     *
     * foldLeft will reduce a list of A's down to a B. It takes an initial value_ of type B
     * and a list of A's.  It also takes a function which takes the accumulated value_ of type B
     * and the next value_ in the list (of type A) and returns a value_ which will be feed back into
     * the accumulator of the next call.
     *
     * As the name suggests it processes the list from left to right.
     *
     * Have a close look at your implementations from the RecursionExercises.  Which parts could you
     * pull out to a function to make them all common?  Your implementation will be very close to
     * foldLeft.
     *
     * Good luck!
     *
     */

    function isEmpty<A>(list: A[]): boolean {
        return list.length === 0;
    }

    function getAheadLast<A>(list: A[]): { ahead: A[], last: A } {
        return {
            ahead: list.splice(0, list.length - 1),
            last: list[list.length - 1]
        }
    }

    export const foldLeft = <A, B>(initialValue: B, list: A[]) => (f: (b: B, a: A) => B): B => {
        return null;
    };

    /**
     * foldRight is the same as foldLeft, except it processes the list from right to left.
     */

    export const foldRight = <A, B>(initialValue: B, list: A[]) => (f: (a: A, b: B) => B): B => {
        return null;
    };

    /**
     * Remember these, from our recursion exercises?  They can all be implemented with either
     * foldLeft or foldRight.
     */

    export const sum = (x: Array<number>): number => {
        return null;
    };

    export const length = <A>(x: A[]): number => {
        return null;
    };

    export const map = <A, B>(x: A[]) => (f: (a: A) => B): B[] => {
        return null;
    };

    export const filter = <A>(x: A[]) => (f: (a: A) => boolean): A[] => {
        return null;
    };

    export const append = <A>(x: A[]) => (y: A[]): A[] => {
        return null;
    };

    export const flatten = <A>(x: A[][]): A[] => {
        return null;
    };

    export const flatMap = <A, B>(x: A[]) => (f: (a: A) => B[]): B[] => {
        return null;
    };

    // Maximum of the empty list is 0
    export const maximum = (x: number[]): number => {
        return null;
    };

    export const reverse = <A>(x: A[]): A[] => {
        return null;
    };
}
