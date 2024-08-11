# Basic example of cold observable in RxJS

A hot observable in RxJS is a type of observable that starts emitting values immediately, regardless of whether there are subscribers or not. All subscribers share the same sequence of values that the observable emits, meaning each subscriber receives the values that are emitted during their subscription time.