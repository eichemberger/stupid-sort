# Stupid Sort (Bogosort)

Stupid Sort is an npm package that implements the highly inefficient [Bogosort](https://en.wikipedia.org/wiki/Bogosort) algorithm, also known as stupid sort or slowsort. This algorithm works by randomly shuffling the input list until it is sorted.

Please note that this sorting algorithm is highly inefficient and should not be used in any real-world applications. It is intended for educational purposes and amusement only.

## Installation

To install the 'stupid-sort' package, run the following command:

```bash
npm install stupid-sort
```

## Usage

To use the 'stupid-sort' package, import it into your project:

```javascript
const stupidSort = require("stupid-sort");

let arr = [3, 1, 4, 1, 5, 9];
stupidSort(arr);

console.log(arr); // The sorted array will be printed, but note that the algorithm is very inefficient!
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Wikipedia](https://en.wikipedia.org/wiki/Bogosort) for the Bogosort algorithm

## Contributing

We welcome contributions to the 'stupid-sort' project! To contribute, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes: `git checkout -b my-feature-branch`.
4. Make changes to the code and commit them: `git commit -am "Add my feature"`.
5. Push your changes to your forked repository: `git push origin my-feature-branch`.
6. Create a pull request on GitHub to merge your changes into the main repository.

Please make sure to follow the existing code style and include tests for any new features or bug fixes.

## Support

If you encounter any issues or have questions about the 'stupid-sort' package, please open an issue on GitHub.

## Disclaimer

Please note that the 'stupid-sort' package is not intended for use in production or any real-world applications. The Bogosort algorithm is highly inefficient and should not be used for sorting data in any practical scenario. This project is for educational purposes and amusement only.

## Command-Line Interface (CLI)

The 'stupid-sort' package includes a command-line interface that allows you to sort a list of numbers directly from the command line.

To use the CLI, first install the package globally:

```bash
npm install -g stupid-sort
```

Then, you can use the `stupid-sort` command to sort a list of numbers:

```bash
stupid-sort 3 1 4 1 5 9
```
