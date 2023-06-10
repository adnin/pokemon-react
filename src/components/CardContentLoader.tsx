import React from 'react'
import ContentLoader from 'react-content-loader';

export default function CardContentLoader(props: any) {
    return (
        <ContentLoader
          backgroundColor="#ffe976"
          foregroundColor="#fed87d"
          speed={3}
          {...props}
        >
          <rect x="0" y="0" rx="3" ry="3" width="400" height="560" />
        </ContentLoader>
      );
}