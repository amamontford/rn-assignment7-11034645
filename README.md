# rn-assignment7-11034645

## E-commerce Themed Mobile Application

This application is a ecommerce-themed mobile application built using React Native, designed to manage and view product-related information. It has features like a drawer navigation menu, a cart system, and detailed product views. This allows users to navigate add and remove products from the cart, view product details, view products in the cart and navigate using the drawer navigation menu.

### Features:

- **HomeScreen**: Displays a list of available products fetched from an external API.
- **ProductDetailScreen**: Shows detailed information about a selected product.
- **CartScreen**: Displays selected items in the cart.
- **Drawer Component**: Accessible through a swipe gesture.
- **Add to Cart Button**: Allows users to add products to their cart.
- **Remove from Cart Button**: Allows users to remove selected items from their cart.
- **Data Fetching**: Fetches data from an external API using fetch or axios.
- **Asynchronous Operations Management**: Handles async operations with async/await or promises.
- **Product Lists and Details Rendering**: Displays product lists and detailed product information.
- **Local Storage**: Stores selected items locally on the device using AsyncStorage.

### Core Components

- **DrawerScreen**: Customizes the drawer navigation menu with a close button, user title, and navigation items, ensuring a clean and interactive user interface.
- **Cart**: Manages and displays cart items using AsyncStorage for persistent data, lists items with remove options, calculates total price, and provides a checkout button.
- **Header**: Provides a consistent header across screens, including the app logo, menu button, search icon, and an optional "Our Story" section for enhanced navigation and branding.

### Functionality:

Users can:
- View a list of available products fetched from an external API.
- Preview detailed information about a product.
- Add products to their cart.
- Remove products from their cart.
- View the items in their cart.

### Additional Dependencies:

- **react-native-gesture-handler**: Enables gesture handling capabilities in the app.
- **@react-navigation/native**: Provides a navigation container for managing the navigation state.
- **@react-navigation/bottom-tabs**: Enables bottom tab-based navigation.

### Screenshots of Application:

<img src="./ShopApp/screenshot1.jpg" width="250">
<img src="./ShopApp/screenshot2.jpg" width="250">
<img src="./ShopApp/screenshot3.jpg" width="250">
<img src="./ShopApp/screenshot4.jpg" width="250">

### Installation:

To run this application locally:

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm start` to start the Metro Bundler.
4. Scan the QR code using the Expo Go app on your mobile device or run the application on an emulator.

### Technologies Used:

- React Native
- JavaScript
- react-native-gesture-handler
- @react-navigation/native
- @react-navigation/bottom-tabs
- react-native-event-listeners

### Design Choices and Data Storage Implementation:

**Design Choices**:
- **DrawerScreen**: Designed to provide a clean and interactive user interface with easy access to navigation items. The close button and user title enhance usability.
- **Cart**: Designed to manage cart items efficiently, providing users with the ability to view, add, and remove items seamlessly. The use of FlatList ensures smooth performance even with a large number of items.
- **Header**: Consistently used across screens to maintain a uniform look and feel. The inclusion of navigation icons and an optional "Our Story" section enhances user engagement and navigation.

**Data Storage**:
- **AsyncStorage**: Used to store cart items locally on the device. This ensures that users' selected items persist between app sessions. AsyncStorage was chosen for its simplicity and effectiveness in handling small amounts of key-value data.

### Student ID:
11034645