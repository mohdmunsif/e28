# Java Object Oriented Programming (compiled) vs JavaScript Prototype Based Programming (interpreted)

## WHAT IS OBJECT ORIENTED PROGRAMMING (OOP)?

Prior to the invention of OOP, programming is done in the procedural manner, as in, a block of code that does a specific function, is used and re-used each time the function is need. This proves to be useful, to have a block of codes that does certain thing based on certain inputs. 

But what if there exists a need for the function to change its behavior. Here comes OOP to the rescue. The concept of OOP is that you create a class which will be the blueprint for the creation of an object in the program. And each class would have attributes and methods assigned, which the program will manipulate in duration of the program being run. A class itself is not an object but an instance of a class is an object. 

But how does that help with the initial issue of modifying the function? Here is where one of the core feature of OOP. Inheritance (via class Extension), and Interface (via Implementation). Classes (the blueprint) can be extended to create a new class, and the extension would create a new class that inherits all the functionalities of the parent class. As an example, a parent class called `ANIMAL`, that has attributes like `TYPE`, and method called `makeNoise()`, can be extended to create a class called `DOG` and `BIRD`. 

While both `DOG` and `BIRD` came from the same parent `ANIMAL` class, each class would have different `TYPE` attribute (`MAMMAL`, `BIRD`) and each class can override the method `makeNoise()` , (one would call `BARK` noise, the other would `CHIRP` noise).

##WHAT IS PROTOTYPE BASED PROGRAMMING (PBP)?
Not going to be left behind, non OOP language often have something called Prototype Based Programming (PBP). What this means is that instead of having a class as the blueprint (and not a concrete object that consumes memory space in a program), a prototype (of an object) is created, which would have similar feature of a class in OOP has. While a class in OOP needs to be instantiated, a prototype is already instantiated, and it can be replicated and the replicated prototype can then be modified to create a different object

## EXTREMLY BRIEF HISTORY OF JAVA AND JAVASCRIPT
1. Java was created in 1991, and the premise of Java was interesting, where you code something once, and you run it everywhere. This is made possible with the use of JavaVirtualMachine (JVM), where the compiled Java code, is called Java-byte code, and not compiled to the machine code (lowest level of code that a computer could understand). The byte-code will then be interpreted by the JVM on the target machine. Due to the nature of Java, it is ubiquitous.

2. Contrary to Java, Javascript is made for the purpose of running a something similar to Java programming on a web browser, hence the chosen name at the inception to be a companion for Java.  

## SHORT EVOLUTION HISTORY FROM WRITERS PERSPECTIVE
While both are open source, the evolutions took place differently. Personally for me, since I have used the internet early on, back in the 90s, I could still remember that JavaScript used to be very resource intensive, and websites that utilizes JS, would be very slow to load. 

With the creation of a framework to .....

Java on the other hand, I've only come to use it, (I've known of it years before but never had the chance to use it). 

## HOW BOTH JAVA AND JAVASCRIPT WORKS AND HOW THEY DIFFER?
1. Java is a compiled language. What this means is that it works after a Java Compiler compiles a bunch of Java codes that then produces a Java Binaries.

2. OOP vs PBP approach:

3. Memory Management: 

4. Extension/Framework:

5. Ownership:

6. Community:

