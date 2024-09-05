import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDocument, Document } from '../../api/documentApi';

const PhotoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDocument = async () => {
      try {
        const documentData = await fetchDocument(+id!);
        console.log('la document data es', documentData);
        setDocument(documentData);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    };

    getDocument();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!document) return <p>No document found</p>;

  return (
    <div className="w-full mx-auto p-5 box-border">
      <h1 className="text-center text-gray-800 mb-5">{document.name}</h1>
      {document.images ? (
        document.images.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="block w-4/5 mx-auto my-2.5"
          />
        ))
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default PhotoPage;
