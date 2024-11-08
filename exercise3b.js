import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise3b = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, { backgroundColor: 'powderblue'}]}>
                Child One
            </Text>
            <Text style={[styles.child, { backgroundColor: 'skyblue'}]}>
                Child Two
            </Text>
            <Text style={[styles.child, { backgroundColor: 'steelblue'}]}>
                Child Three
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        // height:'100%',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        // justifyContent: 'space-between', // Centers the children horizontally
        // alignItems: 'center',     // Centers the children vertically
        // padding: 10,              // Adds some padding inside the Parent container
    },
    child: {
        flex: 1,
        borderWidth: 2,
        fontSize: 24,
        textAlign: 'center'
    }
});

export default Exercise3b;


// import { StyleSheet, Text, View } from 'react-native';
//
// export default App = () => {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, { backgroundColor: 'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.child, { backgroundColor: 'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.child, { backgroundColor: 'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     parent: {
//         flex: 1,
//         flexDirection: 'column',
//         // height:'100%',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 30,
//         // justifyContent: 'space-between', // Centers the children horizontally
//         // alignItems: 'center',     // Centers the children vertically
//         // padding: 10,              // Adds some padding inside the Parent container
//     },
//     child: {
//         flex: 1,
//         borderWidth: 2,
//         fontSize: 24,
//         textAlign: 'center'
//         // borderColor: '#000',
//         // width: 100,
//         // height: 100, // Adds spacing between each child view
//         // justifyContent: 'center', // Center the text vertically in the child
//     },
//
// });

