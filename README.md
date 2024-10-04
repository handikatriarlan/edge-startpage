# Edge Startpage

![Edge Startpage Screenshot](https://ucarecdn.com/21d9b036-7aa8-4b34-a004-fb0ab47720e7/edgestartpage.png)
**Edge Startpage** is a customizable start page for your Microsoft Edge browser, designed to provide quick access to bookmarks, display the current date and time, and include social media, developer tools, and other utilities. This project uses HTML, CSS, and JavaScript for functionality.

## Features

- Customizable categories for bookmarks (Social Media, Dev, Google, Fun, Others)
- Displays current date and time dynamically
- Personal greeting message
- Favicon support

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/handikatriarlan/edge-startpage.git
cd edge-startpage
```

### 2. Set Up for Microsoft Edge

- Open Microsoft Edge.
- Navigate to `edge://extensions`.
- Enable Developer mode in the top-right corner.
- Click on Load unpacked.
- Select the folder where you cloned the project (`edge-startpage`).

## Project Structure

```bash
edge-startpage/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── favicon.png
│   │   └── rest.webp
│   ├── js/
│   │   └── script.js
├── index.html
├── LICENSE
├── manifest.json
└── README.md
```

## Customization

- **Bookmarks**: Update bookmarks in the `index.html` file under the appropriate category.
- **Appearance**: Modify `assets/css/style.css` to change the appearance of the start page.
- **Favicon**: Replace the `favicon.png` in `assets/image/` to use your own favicon.

## Contributing

Feel free to open an issue or submit a pull request if you encounter any problems or have suggestions for new features.

## License
This project is licensed under the [MIT License](LICENSE).