import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query, variables } = await request.json();

    const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`;
    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Shopify responded with ${response.status}` }, 
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}