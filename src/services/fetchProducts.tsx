import React, { useEffect, useState } from "react";
import axios from 'axios';

function FetchProducts(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response: { data: any; }) => {
                setData(response.data);
            })
            .catch((err: React.SetStateAction<null>) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default FetchProducts;
