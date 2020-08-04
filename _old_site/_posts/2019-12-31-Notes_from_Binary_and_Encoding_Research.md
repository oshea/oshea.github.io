---
title: 12/31/19 - Notes from Binary and Encoding Research
categories: Reading Notes
tags: dev
layout: post
---

### What Every Programmer Needs To Know About Encodings And Character Sets

Link: [What Every Programmer Absolutely, Positively Needs to Know About Encodings and Character Sets to Work With Text](http://kunststube.net/encoding/)

To use bits to represent anything at all besides bits, we need rules. We need to convert a sequence of bits into something like letters, numbers and pictures using an _encoding scheme_, or _encoding_ for short.

There are 95 human readable characters specified in the ASCII table, including the letters A through Z both in upper and lower case, the numbers 0 through 9, a handful of punctuation marks and characters like the dollar symbol, the ampersand and a few others. It also includes 33 values for things like space, line feed, tab, backspace and so on.

So what the world ended up with is  [a wealth of encoding schemes](http://en.wikipedia.org/wiki/Character_encoding#Common_character_encodings) , standards, de-facto standards and half-standards that all cover a different subset of characters.

[BIG-5](http://en.wikipedia.org/wiki/Big-5)  is such a _double-byte encoding_. Instead of breaking a string of bits into blocks of eight, it breaks it into blocks of 16 and has a big (I mean, BIG) table that specifies which character each combination of bits maps to.

[GB18030](http://en.wikipedia.org/wiki/GB18030)  is another encoding which essentially does the same thing, but includes both Traditional and Simplified Chinese characters. And before you ask, yes, there are encodings which cover only Simplified Chinese. 

This standard is Unicode. It basically defines a ginormous table of 1,114,112 code points that can be used for all sorts of letters and symbols. 

Unicode is big enough to allow for _unofficial_, private-use areas.

_Unicode_ first and foremost defines a table of _code points_ for characters. How these code points are actually _encoded into bits_ is a different topic.

three bytes are often awkward to work with, so four bytes would be the comfortable minimum…characters with big numbers that take a lot of bits to encode, you’re never going to use a huge chunk of those four bytes…To optimize this, there are several ways to encode Unicode code points into bits. UTF-32 is such an encoding that encodes all Unicode code points using 32 bits. UTF-16 and UTF-8 are _variable-length encodings_.

Unicode is a large table mapping characters to numbers and the different UTF encodings specify how these numbers are encoded as bits. Overall, Unicode is _yet another encoding scheme_. There’s nothing special about it, it’s just trying to cover everything while still being efficient.

Unicode code points are written in hexadecimal (to keep the numbers shorter), preceded by a “U+”. The character Ḁ has the Unicode code point U+1E00.

The _primary_ cause of garbled text is: Somebody is trying to read a byte sequence using the wrong encoding. The computer always needs to be told what encoding some text is in.

There are different ways how different kinds of documents can specify what encoding they’re in and these ways should be used.

It would be possible to recover the original text from it if we knew that a Shift-JIS document was misinterpreted as Mac Roman and then accidentally saved as UTF-8 and reversed this chain of missteps. But that would be a lucky fluke.

Many times certain bit sequences are invalid in a particular encoding. If we tried to open the original document using ASCII, some bytes would be valid in ASCII and map to a real character and others wouldn’t. The program you’re opening it with may decide to silently discard any bytes that aren’t valid in the chosen encoding, or possibly replace them with ?. There’s also the “Unicode replacement character” � (U+FFFD) which a program may decide to insert for any character it couldn’t decode correctly when trying to handle Unicode.

If a document has been misinterpreted and converted to a different encoding, it’s broken. Trying to “repair” it may or may not be successful, usually it isn’t.

_Know_ what encoding a certain piece of text, that is, a certain byte sequence, is in, then interpret it with that encoding. That’s all you need to do. If you’re writing an app that allows the user to input some text, specify what encoding you accept from the user.

any mainstream programming language includes some way of converting text from one encoding to another without needing to think about code points, pages or bits at all.

There’s virtually no excuse in this day and age not to be using Unicode all the way. 

In a worst case scenario, the database inadvertently destroys all text during some random operation two years after the system went into production because it was operating on text assuming the wrong encoding.

The ingenious thing about UTF-8 is that it’s binary compatible with ASCII, which is the de-facto baseline for all encodings. All characters available in the ASCII encoding only take up a single byte in UTF-8 and they’re the exact same bytes as are used in ASCII. In other words, ASCII maps 1:1 unto UTF-8.

What does it mean for a language to support Unicode then? In fact, any string in Javascript is UTF-16 encoded. In fact, it’s the only thing Javascript deals with. Other languages are simply _encoding-aware_. Internally they store strings in a particular encoding, often UTF-16.

In Python 3.x: str is Unicode. This may be either UTF-16 or UTF-32 depending on whether your Python interpreter was built with “narrow” or “wide” Unicode characters.

Two or more unicode codes can represent the same character: As such, there are rules governing _Normalization_ within the Unicode standard, i.e. how either of these forms can be converted into the other.

### Random CS 101 knowledge refresher

Like all languages, computer languages have syntax (form) and semantics (meaning). 

Programs written in C are first converted to an assembly program (designed for the underlying hardware), which then in turn is converted to the machine language, the language understood by the hardware. 

Each CPU/processor has its own assembly language. Assembly code is then translated into the target machine code.

Eventually this assembly code is mapped into the corresponding machine language so that the underlying hardware can carry out the instructions. 

A compiler (such as gcc – GNU C compiler or lately GNU compiler collection) translates a program written in a high level language to object code that can be interpreted and executed by the underlying system. Compilers go through multiple levels of processing such as, syntax checking, pre-processing macros and libraries, object code generation, linking, and optimization among many other things. A course in compiler design will expose you to many of the tasks a compiler typically does. Writing a compiler is a substantial undertaking and one that requires a lot of attention to detail and understanding of many theoretical concepts in computer science. 

An operating system is a software program that manages coordination between application programs and underlying hardware. OS manages devices such as printers, disks, monitors and manage multiple tasks such as processes. 

All data and program instructions are stored as sequences of bytes in the memory called Random Access Memory (RAM). 

Typically data and instructions are stored in specific parts of the RAM as directed by the OS/compiler. As programs are executed, each instruction is fetched from memory and executed to produce the results. To increase the speed of execution of a program, a compiler may use fast accessed memory locations such as registers and cache memory. 

Each data byte can be represented using an ASCII (or extended ASCII) value. 

A C string is considered a sequence of characters ending with null character ‘\0’. 

An integer is typically represented by 4 bytes (or 32-bits). However this depends on the compiler/machine you are using. It is possible some architectures may use 2 bytes while others may use 8 bytes to represent an integer. 

printf(“The size of int is %d \n”, sizeof(int)); 

### Binary vs text formats

A binary format is a more complex storage solution than a plain text format, but it will typically provide faster and more flexible access to the data and use up less memory.

there is a limit to the **precision** that we can achieve when we store real numbers this way. Most real values cannot be stored exactly on a computer

The characteristic feature of a binary format is that there is _not_ a simple rule for determining how many bits or how many bytes constitute a basic unit of information.

It is necessary for there to be a description of the rules for the binary format that states what information is stored and how many bits or bytes are used for each piece of information.

Like most binary formats, the structure consists of **header** information, followed by the raw data itself. The header information includes information about how many data values have been stored, what sorts of values they are, and where within the file the header ends and the data values begin.

This demonstrates the idea of binary formats, where values are packed into memory next to each other, with different values using different numbers of bytes. Another classic feature of binary formats is that the header information contains pointers to the location of the raw data within the file and information about how the raw data values are stored. 

In general, it is possible to jump directly to a specific location within a binary format file, whereas it is necessary to read a text-based format from the beginning and one character at a time. This feature of accessing binary formats is called **random access** and it is generally faster than the typical **sequential access** of text files.

Text file characteristics:
* Data format is usually line-oriented and always mostly human readable
* Non-printable ASCII characters are discouraged or disallowed. Examples include the NUL byte (0x00), DEL byte (0x7F), and most of the range 0x01 to 0x1F
* The reading of newline sequences is usually universal – namely, CR (classic Mac OS), LF (Unix), or CR+LF (Windows) all mean the same thing, which is to end the current line and start the next one.
* There is some character encoding that governs how extended-ASCII bytes are handled. Byte values from 0x80 to 0xFF are not covered by the universally accepted ASCII standard, and the interpretation of these bytes depends on the choice of character encoding – such as UTF-8, ISO-8859-1, Shift JIS. Thus the interpretation of a text file depends on the character encoding used (unless the file format is known to be pure-ASCII), whereas a binary file is just a sequence of plain bytes with no inherent notion of character encoding.

C only supports 8-bit characters, so text mode does not actually help with interpreting file bytes as Unicode code points.

In Python, you specify binary or text mode when opening a file stream with open(). In Python 3, if a file is opened in binary mode then read() and write() work with byte sequences of the bytes type. Otherwise a file as opened in text mode, then read() and write() apply a character encoding to convert the underlying bytes to/from a Unicode string of the str type.

Use a hex editor to work with binary files.

In computing, endianness refers to the order of bytes (or sometimes bits) within a binary representation of a number. It can also be used more generally to refer to the internal ordering of any representation, such as the digits in a numeral system or the sections of a date.

**How do programs distinguish between “text” and “binary” files without knowing the file extension?**

It seems reasonable to begin with an abstract notion of text as being a sequence of  [Unicode code points](https://en.wikipedia.org/wiki/Unicode) . Examples of code points are characters like k, ä or א, as well as special symbols like %, ☢ or 🙈.

To store a given text as a sequence of bytes, we need to choose an _encoding_. If we want to be able to represent the whole Unicode range, we typically choose UTF-8, sometimes UTF-16 or UTF-32.

Given just the contents of a file (not the history on how it was created), we can therefore try the following definition:
> A file is called “text file” if its content consists of an encoded sequence of Unicode code points.  

There are two practical problems with this definition. First, we would need a list of _all possible_ encodings. Second, in order to test if the contents of a file is encoded in a given encoding, we would have to decode the _whole_ contents of the file and see if it succeeds¹. The whole process would be really slow.

It turns out that there is a much faster way to distinguish between text and binary files, but it comes at the cost of precision.

So clearly, looking at bytes outside the ASCII range # (00# …7f# ) can not be used as a method to detect “binary” files. 

The image file contains a lot of NULL bytes (00) while the short text message does not. It turns out that this can be turned into a simple _heuristic_ method to detect binary files, since a lot of encoded text data does not contain any NULL bytes (even though it might be legal).

To summarize, grep and diff use the following heuristic approach: _A file is very likely to be a “text file” if the first 1024 bytes of its content do not contain any NULL bytes._

This method will also typically classify UTF-16 and UTF-32 encoded text as “binary”, as they encode common Latin-1 code points with NULL bytes.

a text protocol is one that you can debug using telnet

Examples of binary protocols:  [RTP](http://tools.ietf.org/html/rfc3550) ,  [TCP](http://tools.ietf.org/html/rfc793) ,  [IP](http://tools.ietf.org/html/rfc791) .
Examples of text protocols:  [SMTP](http://tools.ietf.org/html/rfc5321) ,  [HTTP](http://tools.ietf.org/html/rfc2616) ,  [SIP](http://tools.ietf.org/html/rfc3261) .

The “size on disk” of a file may be larger than the bytes in the file because the computer allocates space in fixed blocks (of 4 kilobytes, for example).

Storing numeric data in the computer’s format saves space. It also saves computational effort — the computer does not have to convert a number between binary and ASCII.

**Marshalling And Unmarshalling Data**
_Marshalling_ is the process of taking the internal data of a program and saving it to a flat, linear file. _Unmarshalling_ is the process of reading that that linear data and recreating the complex internal data structure the computer originally had.

The base of each number system is also called the **radix**. The radix of a decimal number is ten, and the radix of binary is two.

It isn’t quite as simple to convert a decimal number to binary. This conversion requires repeatedly dividing the decimal number by 2, until you’ve reduced it to zero. Every time you divide the **remainder** of the division becomes a digit in the binary number you’re creating.



### Encoding

Unicode doesn’t contain “every character from every language”, although it sure does try.

Unicode itself is a mapping, it defines codepoints and a codepoint is a number, associated with _usually_ a character. I say usually because there are concepts like combining characters. You may be familiar with things like accents, or umlauts. Those can be used with another character, such as an a or a u to create a new logical character. A character therefore can consist of 1 or more codepoints.

To be useful in computing systems we need to choose a representation for this information. Those are the various unicode encodings, such as utf-8, utf-16le, utf-32 etc. They are distinguished largely by the size of of their codeunits. UTF-32 is the simplest encoding, it has a codeunit that is 32bits, which means an individual codepoint fits comfortably into a codeunit. The other encodings will have situations where a codepoint will need multiple codeunits, or that particular codepoint can’t be represented in the encoding at all (this is a problem for instance with UCS-2).

Because of the flexibility of combining characters, even within a given encoding the number of bytes per character can vary depending on the character and the normalization form. 

Strangely enough, nobody pointed out how to calculate how many bytes is taking one Unicode char. Here is the rule for UTF-8 encoded strings:
Binary    Hex          Comments
0xxxxxxx  0x00..0x7F   Only byte of a 1-byte character encoding
10xxxxxx  0x80..0xBF   Continuation byte: one of 1-3 bytes following the first
110xxxxx  0xC0..0xDF   First byte of a 2-byte character encoding
1110xxxx  0xE0..0xEF   First byte of a 3-byte character encoding
11110xxx  0xF0..0xF7   First byte of a 4-byte character encoding

Actually, since ASCII is a 7-bit encoding, it supports 128 codes (95 of which are printable), so it only uses half a byte (if that makes any sense).

_How many bytes does a Unicode character require?_
Unicode just maps characters to codepoints. It doesn’t define how to encode them. A text file does not contain Unicode characters, but bytes/octets that may represent Unicode characters.

_And what do UTF-7, UTF-6, UTF-16 etc mean? Are they some kind Unicode versions?_ No, those are encodings. They define how bytes/octets should represent Unicode characters.

Examples:
* U+0061 LATIN SMALL LETTER A: a
	* Nº: 97
	* UTF-8: 61
	* UTF-16: 00 61
* U+00A9 COPYRIGHT SIGN: ©
	* Nº: 169
	* UTF-8: C2 A9
	* UTF-16: 00 A9
* U+00AE REGISTERED SIGN: ®
	* Nº: 174
	* UTF-8: C2 AE
	* UTF-16: 00 AE
* U+2691 BLACK FLAG: ⚑
	* Nº: 9873
	* UTF-8: E2 9A 91
	* UTF-16: 26 91
* U+269B ATOM SYMBOL: ⚛
	* Nº: 9883
	* UTF-8: E2 9A 9B
	* UTF-16: 26 9B
* U+2708 AIRPLANE: ✈
	* Nº: 9992
	* UTF-8: E2 9C 88
	* UTF-16: 27 08
* U+1F4A9 PILE OF POO: 💩
	* Nº: 128169
	* UTF-8: F0 9F 92 A9
	* UTF-16: D8 3D DC A9
* U+1F680 ROCKET: 🚀
	* Nº: 128640
	* UTF-8: F0 9F 9A 80
	* UTF-16: D8 3D DE 80

Simply speaking Unicode is a standard which assigned one number (called code point) to all characters of the world (Its still work in progress).
Now you need to represent this code points using bytes, thats called character encoding. UTF-8, UTF-16, UTF-6 are ways of representing those characters.
UTF-8 is multibyte character encoding. Characters can have 1 to 6 bytes (some of them may be not required right now).
UTF-32 each characters have 4 bytes a characters.
UTF-16 uses 16 bits for each character and it represents only part of Unicode characters called BMP (for all practical purposes its enough). Java uses this encoding in its strings.

UTF-8, an 8-bit variable-width encoding which maximizes compatibility with ASCII;
UTF-16, a 16-bit, variable-width encoding;
UTF-32, a 32-bit, fixed-width encoding.

 [UTF-8](http://en.wikipedia.org/wiki/UTF-8)  uses the 2 high bits (bit 6 and bit 7) to indicate if there are any more bytes: Only the low 6 bits are used for the actual character data. That means that any character over 7F requires (at least) 2 bytes.

The ASCII **character set** is the **most** common compatible subset of **character** sets for English-language **text** files, and is generally assumed to be the **default** file format in **many** situations. 

UTF-8 is the default charset for Linux and command line tools.

UTF-8, on the other hand, needs to be capable of representing all of the millions of characters in Unicode. This makes it impossible to squeeze every single character into a single byte.

The designers of UTF-8 chose to make all of the ASCII characters (U+0000 to U+007F) representable with a single byte, and required all other characters to be stored as two or more bytes. If they had chosen to give more characters a single-byte representation, the encodings of other characters would have been longer and more complicated.

It is difficult to get, or worse,  [guess the encoding](https://unicodebook.readthedocs.io/guess_encoding.html#guess)  of a document. Except for encodings of the UTF family (coming from the Unicode standard), there is no reliable algorithm for that. We have to rely on statistics to guess the most probable encoding, which is done by most Internet browsers.

There is no explicit encoding information in a plain text file - that’s the definition of “plain text file”, the “plain” refers to the fact that there is no meta-data in the file.

In some encodings (notably in UTF-8) not all byte sequences are valid. So an application can just try to decode the file as UTF-8. If it succeeds, the file is probably UTF-8; if it fails by finding an invalid byte sequence, it is not. This is how e.g. vim works by default: It will first try to use UTF-8 when reading a file; if that fails, it falls back to **ISO-8859-1**.

Linux does not store information about the encoding of a file. It must be guessed or supplied.

### What every programmer should know about ‘String’

Link: [What every programmer should know about ‘String’ - By](https://hackernoon.com/what-every-programmer-should-know-about-string-a6611537f84e)

The primary component of a String is ‘Character’, wait, you already know that. But do you know that basically characters are just code representations? 

All the characters in the world aren’t created equal and they are always not single byte characters.

Some programming languages (C, C++ etc.) provide single byte data type (_char_) for specifically ASCII characters and multi-byte data type (_wchar_t_) for Unicode.

Some programming languages (Java etc.) have only multi-byte data types for character types.

The days of_one byte == one character_ is long gone, and you need to keep that in mind vividly.

Character encoding can be fixed length or variable length.

UTF-16 represents most of the commonly used Unicode code points in a single 16-bit character type and uses two 16-bit characters to represent the remainder. That means UTF-16 is a variable length encoding using minimum 16-bits (2 bytes) and maximum 32-bits (4 bytes).

UTF-8 uses one to four 8-bit characters to encode all Unicode code points. It’s also another variable length encoding which represents basically the ASCII characters using a single byte (that’s handy because it means ASCII text is also valid in UTF-8) and rest of the code points by 2, 3, 4 bytes as needed.

UTF-32 uses 4 bytes for all characters. It is a fixed length encoding.

The thing you need to know about the language you are working with is, whether the String data type of your language is **Mutable**or **Immutable**. For instance, Java and Python String types are Immutable.

Languages like Java and Python treats String as Object and they **set aside a special area of memory called the “String constant pool”.**

**In the String constant pool, a String object is likely to have one or many references. If several references point to same String without even knowing it, it would be bad if one of the references modified that String value. That’s why String objects are immutable.**

**subsequence**_is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements_

When up or down casing strings for comparison you need to make some other considerations like Unicode Normalization and such. Learn more about it  [here](https://www.w3.org/International/wiki/Case_folding) .

Splitting or Tokenizing a string means to break down a single string to several parts based on a delimiter or set of delimiters.

**‘Lexicographic Order’**, which is also known as ‘Alphabetic order’ or ‘Dictionary order’. Note that, in lexicographical ordering, UpperCase letters come before Lowercase letters.

If you store two strings in two variables and try to check their equality by == operator you need to make sure if your programming language is doing value match or just reference match.

Google search suggestions: If you observe this closely you would see that they are doing basically some prefix match. The efficient approach would be to use some sophisticated data structure like  [Trie](https://en.wikipedia.org/wiki/Trie) .

If you need to do some suffix match, you can convert the problem to a prefix match problem by storing reverse of the strings along with the actual strings or you can take help of  [Suffix Tree](https://en.wikipedia.org/wiki/Suffix_tree) .

[String-searching algorithm - Wikipedia](https://en.wikipedia.org/wiki/String-searching_algorithm)

If we want to find relevant results not only for the exact expression we typed on the search bar, but also for the other possible forms of the words we used: This can be achieved through two possible methods:  [stemming and lemmatization](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html) . The aim of both processes is the same: **reducing the inflectional forms of each word into a common base or root.**Though this term is most popular in  [NLP](https://en.wikipedia.org/wiki/Natural-language_processing) , it is also used in full-text search mechanism in some database system and text search engines like  [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/guide/current/stemming.html) .

**Phonetic String Matching**: Phonetic algorithms basically index words based on their pronunciation. Most common uses of Phonetic algorithms are ‘Spell checking’, ‘Searching’ etc. There are several phonetic algorithms available to do the job like  [soundex](https://en.wikipedia.org/wiki/Soundex) ,  [metaphone ](https://en.wikipedia.org/wiki/Metaphone) etc. 








