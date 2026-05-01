"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

interface Variant {
  node: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    availableForSale: boolean;
    selectedOptions: Array<{ name: string; value: string }>;
  };
}

interface Product {
  id: string;
  title: string;
  handle: string;
  variants: { edges: Variant[] };
  options: Array<{ name: string; values: string[] }>;
}

export function ProductActions({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(
    product.variants.edges[0]?.node.id || ""
  );
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const variant = product.variants.edges.find(
    (v) => v.node.id === variantId
  )?.node;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product as any },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <>
      {product.variants.edges.length > 1 && (
        <div className="mb-8">
          <p className="text-xs tracking-luxury uppercase mb-3">Variant</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.edges.map((v) => (
              <button
                key={v.node.id}
                onClick={() => setVariantId(v.node.id)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  variantId === v.node.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground"
                }`}
              >
                {v.node.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={handleAdd}
        disabled={isLoading || !variant?.availableForSale}
        className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none"
        size="lg"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : !variant?.availableForSale ? (
          "Sold Out"
        ) : (
          "Add to Bag"
        )}
      </Button>
    </>
  );
}