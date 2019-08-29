export namespace Recursion {

    /**
     * Ok here are the rules.
     *
     * You can't use any of the standard list functions, like map, filter, flatMap, append etc.
     *
     * You CAN and are encouraged to use the solutions from the exercises below to solve the harder
     * ones towards the end.
     *
     * Keep an eye out for repetition and similarities between your answers.
     *
     * REMEMBER: Follow the types, they almost always guide you to the solution.  If it compiles and looks a little
     * too simple, it's probably correct.  As Sherlock Holmes once said, "Each one is suggestive, together they are
     * most certainly conclusive."
     *
     */

    function isEmpty<A>(list: A[]): boolean {
        return list.length === 0;
    }

    export function plusOne(n: number) {
        return n + 1;
    }

    export function minusOne(n: number) {
        return n - 1
    }

    // Add two positive Integers together. You are only allowed to use plusOne and minusOne above
    export function add(a: number, b: number): number {
        return <any>null;
    }

    // You are not permitted to use any array functions such as map, flatMap, ++, flatten etc
    export function sum(x: number[]): number {
        return <any>null;
    }

    //Again no array functions are permitted for the following
    export function length<A>(x: A[]): number {
        return <any>null;
    }

    // Do you notice anything similar between sum and length? Hmm...

    // Mapping over a list.  You are given a List of type A and a function converting an A to a B
    // and you give back a list of type B.  No list functions allowed!
    export function map<A, B>(x: A[], f: (a: A) => B): B[] {
        return <any>null;
    }

    // Given a function from A => Boolean, return a list with only those item where the function returned true.
    export function filter<A>(x: A[], f: (a: A) => boolean): A[] {
        return <any>null;
    }

    // This pattern should be familiar by now... psst... look at add.
    export function append<A>(x: A[], y: A[]): A[] {
        return <any>null;
    }

    // Flatten a list of lists to a single list.  Remember you can't use list.flatten.  Can you use a previous
    // solution to solve this one?
    export function flatten<A>(x: A[][]): A[] {
        return <any>null;
    }

    // Follow the types.  You've done a great job getting here. Follow the types.
    export function flatMap<A, B>(x: A[], f: (a: A) => B[]): B[] {
        return <any>null;
    }

    // Maximum of the empty list is 0
    export function maximum(x: number[]): number {
        return <any>null;
    }

    // Reverse a list
    export function reverse<A>(x: A[]): A[] {
        return <any>null;
    }
}
