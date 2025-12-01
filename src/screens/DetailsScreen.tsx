import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useFetchCoinDetails } from "../hooks/useFetchCoinsDetails";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">; // tipo para as props da rota

export function DetailsScreen() { // tela de detalhes da moeda
    const route = useRoute<DetailsRouteProp>();
    const { id } = route.params;

    const { data, loading, error, reload } = useFetchCoinDetails(id);

    if (loading) { // mostra loading enquanto carrega
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error || !data) { // mostra erro se houver
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{error || "Erro desconhecido"}</Text>
                <TouchableOpacity onPress={reload}>
                    <Text style={{ color: "blue", marginTop: 10 }}>Tentar novamente</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return ( // mostra os detalhes da moeda
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Image
                    source={{ uri: data.image.large }}
                    style={{ width: 120, height: 120 }}
                />

                <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>
                    {data.name}
                </Text>

                <Text style={{ fontSize: 22, marginTop: 5 }}>
                    ${data.market_data.current_price.usd.toLocaleString()}
                </Text>
            </View>

            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                Descrição:
            </Text>

            <Text style={{ lineHeight: 22 }}>
                {data.description.en
                    ? data.description.en.replace(/<[^>]+>/g, "") // tira tags HTML
                    : "Sem descrição disponível."}
            </Text>
        </ScrollView>
    );
}
