import { useRef, useMemo, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState("50%");
  const snapPoints = useMemo(() => [`${start}, ${end}%`], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  function openModal() {
    setStart(100);
    setEnd("50%");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text>Open</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={[start, end]}
        backgroundStyle={styles.bottomsheetStyle}
        // snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "red",
    alignItems: "center",
    paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomsheetStyle: {
    backgroundColor: "white",
  },
});
