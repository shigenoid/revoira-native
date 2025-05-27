import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  RefreshControl, 
  ScrollView 
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/Home";
import { useAuth } from "../../contexts/AuthContext";
import RedeemModal from "../../components/RedeemModal";

const HomeScreen = () => {
  const { user } = useAuth();
  const [isRedeemModalVisible, setRedeemModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulate refresh - in real implementation you would fetch new data here
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor="#57723a"
          colors={["#57723a"]}
        />
      }
    >
      {/* Top Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/images/pfp-dummy.jpeg")}
            style={styles.profileImagePlaceholder}
          />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.greetingText}>
            {user?.username || "User"}! 👋
          </Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>*</Text>
            <Text style={styles.statLabel}>Items Recycled</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user?.point || 0}</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setRedeemModalVisible(true)}
        >
          <FontAwesome name="gift" size={48} color="white" />
          <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="money" size={48} color="white" />
          <Text style={styles.buttonText}>Trade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="book" size={40} color="white" />
          <Text style={styles.buttonText}>Guide</Text>
        </TouchableOpacity>
      </View>

      <RedeemModal
        visible={isRedeemModalVisible}
        onClose={() => setRedeemModalVisible(false)}
      />
    </ScrollView>
  );
};

export default HomeScreen;