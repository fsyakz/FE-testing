import { NextRequest, NextResponse } from 'next/server';
import { foodPrices } from '@/data/sampleData';

export async function GET(request: NextRequest) {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      data: foodPrices,
      message: 'Food prices retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching food prices:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch food prices',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, date } = body;

    // Validate required fields
    if (!name || !price || !date) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'Name, price, and date are required'
        },
        { status: 400 }
      );
    }

    // Create new food price entry
    const newFoodPrice = {
      id: foodPrices.length + 1,
      name,
      price,
      date,
      views: 0
    };

    // In a real application, this would be saved to a database
    foodPrices.push(newFoodPrice);

    return NextResponse.json({
      success: true,
      data: newFoodPrice,
      message: 'Food price added successfully'
    });
  } catch (error) {
    console.error('Error adding food price:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to add food price',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
