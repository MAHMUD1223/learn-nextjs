export default function ProductDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      review of {params.reviewId} product {params.productId}
    </h1>
  );
}
