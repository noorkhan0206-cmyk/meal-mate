import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useThemeContext } from '../theme/themeContext';

export default function AddNewMeal() {
  const navigation = useNavigation();
  const { isDark, theme } = useThemeContext();
  const [mealTitle, setMealTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Dynamic styles based on theme
  const dynamicStyles = {
    container: {
      ...styles.container,
      backgroundColor: isDark ? theme.colors.background : '#FFF5F7',
    },
    header: {
      ...styles.header,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
    },
    mainTitle: {
      ...styles.mainTitle,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    subtitle: {
      ...styles.subtitle,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    label: {
      ...styles.label,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    input: {
      ...styles.input,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
      borderColor: isDark ? theme.colors.border : '#C8E6D5',
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
    helperText: {
      ...styles.helperText,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    imagePlaceholder: {
      ...styles.imagePlaceholder,
      backgroundColor: isDark ? theme.colors.card : '#FFF5E6',
      borderColor: isDark ? theme.colors.border : '#F5E6D3',
    },
    placeholderText: {
      ...styles.placeholderText,
      color: isDark ? theme.colors.textLabelSecondary : '#7F8C8D',
    },
    placeholderSubtext: {
      ...styles.placeholderSubtext,
      color: isDark ? theme.colors.placeholderText : '#BDC3C7',
    },
    cancelButton: {
      ...styles.cancelButton,
      backgroundColor: isDark ? theme.colors.card : '#FFFFFF',
      borderColor: isDark ? theme.colors.border : '#C8E6D5',
    },
    cancelButtonText: {
      ...styles.cancelButtonText,
      color: isDark ? theme.colors.textBlack : '#2C3E50',
    },
  };

  // Handle calendar icon press
  const handleCalendarPress = () => {
    navigation.navigate('WeeklyPlanner');
  };

  // Handle favorite icon press
  const handleFavoritePress = () => {
    navigation.navigate('Favorites');
  };

  // Handle add icon press
  const handleAddPress = () => {
    Alert.alert('Quick Add', 'Quick add feature coming soon!', [{ text: 'OK' }]);
  };

  // Handle settings icon press
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  // Handle image picker
  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setImageUrl(result.assets[0].uri);
    }
  };

  // Handle save meal
  const handleSaveMeal = () => {
    if (!mealTitle.trim()) {
      Alert.alert('Required Field', 'Please enter a meal title');
      return;
    }
    if (!ingredients.trim()) {
      Alert.alert('Required Field', 'Please enter ingredients');
      return;
    }

    Alert.alert(
      'Success',
      `Meal "${mealTitle}" has been saved!`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  // Handle cancel
  const handleCancel = () => {
    Alert.alert(
      'Discard Changes?',
      'Are you sure you want to discard this meal?',
      [
        { text: 'Keep Editing', style: 'cancel' },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <View style={dynamicStyles.container}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={dynamicStyles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={handleCalendarPress}
        >
          <Ionicons name="calendar-outline" size={24} color="#5DADE2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerIcon}
          onPress={handleFavoritePress}
        >
          <Ionicons name="heart-outline" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.headerIcon, styles.addButton]}
          onPress={handleAddPress}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerIcon}
          onPress={handleSettingsPress}
        >
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title Section */}
        <Text style={dynamicStyles.mainTitle}>Add New Meal</Text>
        <Text style={dynamicStyles.subtitle}>Create a new meal for your collection</Text>

        {/* Meal Title Input */}
        <View style={styles.inputContainer}>
          <Text style={dynamicStyles.label}>
            Meal Title <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={dynamicStyles.input}
            placeholder="e.g., Spaghetti Carbonara"
            placeholderTextColor={isDark ? "#95A5A6" : "#999"}
            value={mealTitle}
            onChangeText={setMealTitle}
          />
        </View>

        {/* Ingredients Input */}
        <View style={styles.inputContainer}>
          <Text style={dynamicStyles.label}>
            Ingredients <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[dynamicStyles.input, styles.textArea]}
            placeholder="List your ingredients, one per line or separated by commas"
            placeholderTextColor={isDark ? "#95A5A6" : "#999"}
            value={ingredients}
            onChangeText={setIngredients}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>

        {/* Image URL Input */}
        <View style={styles.inputContainer}>
          <Text style={dynamicStyles.label}>Image URL (Optional)</Text>
          <TextInput
            style={dynamicStyles.input}
            placeholder="https://example.com/image.jpg"
            placeholderTextColor={isDark ? "#95A5A6" : "#999"}
            value={imageUrl}
            onChangeText={setImageUrl}
            keyboardType="url"
            autoCapitalize="none"
          />
          <Text style={dynamicStyles.helperText}>Paste a URL to an image of your meal</Text>
        </View>

        {/* Image Preview */}
        <TouchableOpacity
          style={styles.imagePreviewContainer}
          onPress={handleImagePicker}
          activeOpacity={0.7}
        >
          {selectedImage || imageUrl ? (
            <Image
              source={{ uri: selectedImage || imageUrl }}
              style={styles.previewImage}
              resizeMode="cover"
            />
          ) : (
            <View style={dynamicStyles.imagePlaceholder}>
              <MaterialIcons name="image" size={48} color={isDark ? "#7F8C8D" : "#ccc"} />
              <Text style={dynamicStyles.placeholderText}>No image added</Text>
              <Text style={dynamicStyles.placeholderSubtext}>Tap to select from gallery</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={dynamicStyles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.7}
          >
            <Text style={dynamicStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveMeal}
            activeOpacity={0.7}
          >
            <Text style={styles.saveButtonText}>Save Meal</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    gap: 16,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#5DADE2',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#2C3E50',
    marginLeft: 4,
    fontWeight: '500',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 30,
    fontWeight: '400',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  required: {
    color: '#5DADE2',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#C8E6D5',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 15,
    color: '#2C3E50',
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  helperText: {
    fontSize: 13,
    color: '#7F8C8D',
    marginTop: 8,
    fontWeight: '400',
  },
  imagePreviewContainer: {
    marginBottom: 30,
  },
  previewImage: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    backgroundColor: '#F7F7F7',
  },
  imagePlaceholder: {
    width: '100%',
    height: 220,
    backgroundColor: '#FFF5E6',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F5E6D3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 12,
    fontWeight: '600',
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#BDC3C7',
    marginTop: 6,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#C8E6D5',
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.3,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#5DADE2',
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  bottomSpacing: {
    height: 40,
  },
});
