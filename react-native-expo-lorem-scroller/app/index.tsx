import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

export default function Home() {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        getDataFromApi().then((response) => {
            setData([...data, ...response]);
            setIsLoading(false);
            !isFirstPageReceived && setIsFirstPageReceived(true);
        });
    };

    const getDataFromApi = async (): Promise<string[]> => {
        // get the data from api
        const response = await fetch('https://5262-172-59-104-137.ngrok-free.app/lorem/10');
        return response.json();
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: string }) => {
        return <Text style={{ margin: '0.5em' }}>{item}</Text>;
    };

    const ListEndLoader = () => {
        if (!isFirstPageReceived && isLoading) {
            // Show loader at the end of list when fetching next page data.
            return <ActivityIndicator size={'large'} />;
        }
    };

    if (!isFirstPageReceived && isLoading) {
        // Show loader when fetching first page data.
        return <ActivityIndicator size={'small'} />;
    }

    return (
            <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={() =>
                    <View
                        style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                }
                onEndReached={fetchData}
                onEndReachedThreshold={0.8}
                ListFooterComponent={ListEndLoader} // Loader when loading next page.
            />
    );
}
