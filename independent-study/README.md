# Java Object Oriented Programming (compiled) vs JavaScript Prototype Based Programming (interpreted)

## WHAT IS OBJECT ORIENTED PROGRAMMING (OOP)?

Prior to the invention of OOP, programming is done in the procedural manner, as in, a block of code that does a specific function, is used and re-used each time the function is need. This proves to be useful, to have a block of codes that does certain thing based on certain inputs. 

But what if there exists a need for the function to change its behavior. Here comes OOP to the rescue. The concept of OOP is that you create a class which will be the blueprint for the creation of an object in the program. And each class would have attributes and methods assigned, which the program will manipulate in duration of the program being run. A class itself is not an object but an instance of a class is an object. 

But how does that help with the initial issue of modifying the function? Here is where one of the core feature of OOP. Inheritance (via class Extension), and Interface (via Implementation). Classes (the blueprint) can be extended to create a new class, and the extension would create a new class that inherits all the functionalities of the parent class. As an example, a parent class called `ANIMAL`, that has attributes like `TYPE`, and method called `makeNoise()`, can be extended to create a class called `DOG` and `BIRD`. 

While both `DOG` and `BIRD` came from the same parent `ANIMAL` class, each class would have different `TYPE` attribute (`MAMMAL`, `BIRD`) and each class can override the method `makeNoise()` , (one would call `BARK` noise, the other would `CHIRP` noise).

## WHAT IS PROTOTYPE BASED PROGRAMMING (PBP)?
Not going to be left behind, non OOP language often have something called Prototype Based Programming (PBP). What this means is that instead of having a class as the blueprint (and not a concrete object that consumes memory space in a program), a prototype (of an object) is created, which would have similar feature of a class in OOP has. While a class in OOP needs to be instantiated, a prototype is already instantiated, and it can be replicated and the replicated prototype can then be modified to create a different object

## EXTREMLY BRIEF HISTORY OF JAVA AND JAVASCRIPT
1. Java was created in 1991, and the premise of Java was interesting, where you code something once, and you run it everywhere. This is made possible with the use of Java Virtual Machine (JVM), where the compiled Java code, is called Java-byte code, and not compiled to the machine code (lowest level of code that a computer could understand). The byte-code will then be interpreted by the JVM on the target machine. Due to the nature of Java, it is ubiquitous.

2. Contrary to Java, Javascript is made for the purpose of running a something similar to Java programming on a web browser, hence the chosen name at the inception to be a companion for Java.  

## SHORT EVOLUTION HISTORY FROM WRITERS PERSPECTIVE
While both are open source, the evolutions took place differently. Personally for me, since I have used the internet early on, back in the 90s, I could still remember that JavaScript used to be very resource intensive, and websites that utilizes JS, would be very slow to load. 

However, as time progresses, the JavaScript engine keeps on improving and at the same time, processing power of consumer machines that runs the browser have also increased significantly. With the creation of a framework called NodeJS, which allowed JS code to be executed off web browser, things started changing for JS. The prospect of having the applications meant for browsers to be  available everywhere else.  

Java on the other hand, I've only come to use it, (I've known of it years before but never had the chance to use it), a couple of times, one of the game changing product of Java evolution, was the Android platform. While Android is running its own separate life now, the root of Android's beginning stemmed from it being developed using Java codes as well as the creation of DALVIK (which serves the same purpose as JVM)

## HOW BOTH JAVA AND JAVASCRIPT (JS) WORKS AND HOW THEY DIFFER?
1. Java is a compiled language (though it can also be argued that it is both compiled and interpreted - more on this at the end of this point). What this means is that, it works after a Java Compiler compiles a bunch of Java codes, that then produces a Java "Binaries" or also called Java Bytecodes (often in the form of .class file extension) . The Java Bytecodes (could also resides within a **Java ARchive** ~ `JAR` file) are then executed by the Java Virtual Machine (JVM) on the target environment.

Contrary to Java, JS is an interpreted language or also known as "Scripting language" – what this means is that there will be an interpreter that would translate the codes into machine language at runtime. This makes JS to be platform independent as the same code can be executed on any platform where there is a JS interpreter. 

There are a number of differences between compiled and interpreted language.  One is that, for compiled languages, the compiler had taken up the overhead of translating the codes into machine code, and interpreted language would do it during run time, so it could mean it is slightly slower. There could also be optimizations done in the compilation step which would add to the speed of the compiled application to be executed. 

Still, the above could a huge factor years ago when processing power along with memory available on computers are limited and considered as expensive. With the current technological advancement with computer processing power as well as the technology involved in interpreting codes, this might not not matter as much. 

Another advantage is that the compiler would be able to detect any errors in the program/application before runtime, but scripting languages would often encounter those errors during runtime. However, with a lot of linting tools available for major programming languages, as well as having automated unit testing and system testing, this means that interpreted language would be able to achieve similar error checking that the compiler would have for compiled languages.  

Worth nothing, one unique feature of Java is the use of the tagline "Write Once Run Anywhere" popularized by Sun Microsystem, where it claimed to be platform independent. This was early on when there were other compiled programming languages that require developers to re-write the same code for different platform. This feature that Java has, is also where Java can be said to be an interpreted language as well, as the compiled Java ByteCode is actually being interpreted by the JVM that runs on the target machine. 

2. OOP (compiled) vs PBP (interpreted) approach: 
In terms of the approach of both languages, the main idea of OOP is that it provides a blueprint of the application being developed, and the hierarchy of the program structure, in terms of classes and objects can be mapped.

This is also where OOP features play a huge part. `Inheritance`, `Polymorphism`, type checking are used to assist developers in terms of structuring the application, as well as not repeating the same code. Codes are re-used via subclassing/inheritance, and interfaces and class types are used to force adherence to the structure already laid out by the original developer. The blueprint is there, and it needs to be followed, and issues will be detected during compilation time. 

For PBP, since there is no classes, objects are created on the fly, and they are often dynamically typed, there could be potential issues down the in the development process, however as stated before, with the increase use of linting tools, this is not so much of a hindrance. 

3. Memory Management: Simplifying this, each system running Java or JS program would have a certain amount of memory that it can utilize at any given time or running the application, so the language of the application would have to handle memory allocation within the program. In this regard, both languages are similar as both have some sort of garbage collection mechanism, where any unused objects would be removed from memory and the memory be released back to the operating system automatically.

4. Extension/Framework:
For Java, one of the most popular framework is **Spring**. And on the JS side, it would definitely be **NodeJS** and along with that, that framework allows other frameworks to gain popularity like **ReactJS**, **AngularJS** and **VueJS**. Definitely there are a lot more but mentioning the popular frameworks for each language.

Having had the experience of working with Spring and React, a bit of Angular and now Vue, I could say that those frameworks work very well to make it easier for developers to accomplish tasks at hand.

In terms of development, I can say that using interpreted language (often with a feature called "hot-reload"), you can see the changes made by the codes instantly compared to using compiled language where you have to re-compile each time you do any significant changes to test if it works as expected. 

Also, JS frameworks are also utilized in building cross platform mobile applications (commonly referring to the two platforms, Android and Apple iOS), and not surprisingly, JS can also create applications for Android, which is a Java based platform.

5. Ownership: Both Java and JavaScript are sort of managed openly. Though it has to be noted that JS that is managed under ECMAScript, is actually an agreed standard in terms of what the interpreter would expect the language to do and support. This means that JS can have a number of implementation but each implementations would have to deliver what ECMAScript had laid out so that any JS engine would have the same behavior during runtime.

For Java on the other hand, the JDK (Java Development Kit) is set to be open source by Sun Microsystem, however, after the acquisition by Oracle, there are 2 different versions of JDK, one would be a proprietary Oracle version, and the other is the OpenJDK. Both are similar technically though Oracle added a bit more feature to its proprietary JDK.

6. Community:
In this respect, both have tons of support and advocates. Java, since it is the older of the two, it has quite significant user base. Javascript, with the invention of NodeJS, grew a slew number of communities, mainly for all the popular JS frameworks.

If other interpreted languages are thrown in the mix, like Python and Php, my gut feeling says that there might be more of the supporters for those languages combined (JS + PHP + Python) compared to Java.


## Conclusion
I would say both languages have a lot of advantages, where OOP would force developers to really plan ahead in terms of structuring the application but at the end of the day, it will come down to one's preference as both can be used to achieve the same goal, programming wise.

References:
https://en.wikipedia.org/wiki/Node.js 
https://www.geeksforgeeks.org/why-is-java-write-once-and-run-anywhere/
https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/
https://www.tutorialspoint.com/What-is-the-difference-between-JavaScript-and-ECMAScript
https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
https://www.baeldung.com/oracle-jdk-vs-openjdk
