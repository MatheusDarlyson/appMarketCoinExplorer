import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { useFetchCoins } from "../hooks/useFetchCoins";
import { MarketCoin } from "../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">; // Definindo o tipo de navegação para a tela Home

export function HomeScreen() { // tela principal com a lista de moedas
    const navigation = useNavigation<NavigationProp>();
    const { data, loading, error, reload } = useFetchCoins();

    const renderItem = ({ item }: { item: MarketCoin }) => ( // renderiza cada item da lista de moedas
        <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}
            style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#eee"
            }}
        >
            <Image
                source={{ uri: item.image }}
                style={{ width: 40, height: 40, marginRight: 12 }}
            />

            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.name}
                </Text>

                <Text style={{ color: "#9534" }}>
                    Rank: {item.market_cap_rank}
                </Text>
            </View>

            <Text style={{ fontSize: 16 }}>
                ${item.current_price.toFixed(2)}
            </Text>
        </TouchableOpacity>
    );

    if (loading) { // mostra indicador de carregamento enquanto busca os dados
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) { // mostra mensagem de erro se a busca falhar
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ marginBottom: 10 }}>{error}</Text>
                <TouchableOpacity onPress={reload}>
                    <Text style={{ color: "blue" }}>Tentar novamente</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return ( // tela principal com a lista de moedas
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
